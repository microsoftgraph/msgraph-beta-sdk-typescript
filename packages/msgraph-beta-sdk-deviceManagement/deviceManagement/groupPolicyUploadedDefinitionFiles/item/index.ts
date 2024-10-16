/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupPolicyUploadedDefinitionFileFromDiscriminatorValue, serializeGroupPolicyUploadedDefinitionFile, type GroupPolicyUploadedDefinitionFile } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AddLanguageFilesRequestBuilderRequestsMetadata, type AddLanguageFilesRequestBuilder } from './addLanguageFiles/index.js';
// @ts-ignore
import { DefinitionsRequestBuilderNavigationMetadata, DefinitionsRequestBuilderRequestsMetadata, type DefinitionsRequestBuilder } from './definitions/index.js';
// @ts-ignore
import { GroupPolicyOperationsRequestBuilderNavigationMetadata, GroupPolicyOperationsRequestBuilderRequestsMetadata, type GroupPolicyOperationsRequestBuilder } from './groupPolicyOperations/index.js';
// @ts-ignore
import { RemoveRequestBuilderRequestsMetadata, type RemoveRequestBuilder } from './remove/index.js';
// @ts-ignore
import { RemoveLanguageFilesRequestBuilderRequestsMetadata, type RemoveLanguageFilesRequestBuilder } from './removeLanguageFiles/index.js';
// @ts-ignore
import { type UpdateLanguageFilesRequestBuilder, UpdateLanguageFilesRequestBuilderRequestsMetadata } from './updateLanguageFiles/index.js';
// @ts-ignore
import { type UploadNewVersionRequestBuilder, UploadNewVersionRequestBuilderRequestsMetadata } from './uploadNewVersion/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groupPolicyUploadedDefinitionFiles property of the microsoft.graph.deviceManagement entity.
 */
export interface GroupPolicyUploadedDefinitionFileItemRequestBuilder extends BaseRequestBuilder<GroupPolicyUploadedDefinitionFileItemRequestBuilder> {
    /**
     * Provides operations to call the addLanguageFiles method.
     */
    get addLanguageFiles(): AddLanguageFilesRequestBuilder;
    /**
     * Provides operations to manage the definitions property of the microsoft.graph.groupPolicyDefinitionFile entity.
     */
    get definitions(): DefinitionsRequestBuilder;
    /**
     * Provides operations to manage the groupPolicyOperations property of the microsoft.graph.groupPolicyUploadedDefinitionFile entity.
     */
    get groupPolicyOperations(): GroupPolicyOperationsRequestBuilder;
    /**
     * Provides operations to call the remove method.
     */
    get remove(): RemoveRequestBuilder;
    /**
     * Provides operations to call the removeLanguageFiles method.
     */
    get removeLanguageFiles(): RemoveLanguageFilesRequestBuilder;
    /**
     * Provides operations to call the updateLanguageFiles method.
     */
    get updateLanguageFiles(): UpdateLanguageFilesRequestBuilder;
    /**
     * Provides operations to call the uploadNewVersion method.
     */
    get uploadNewVersion(): UploadNewVersionRequestBuilder;
    /**
     * Delete navigation property groupPolicyUploadedDefinitionFiles for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The available group policy uploaded definition files for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyUploadedDefinitionFile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GroupPolicyUploadedDefinitionFileItemRequestBuilderGetQueryParameters> | undefined) : Promise<GroupPolicyUploadedDefinitionFile | undefined>;
    /**
     * Update the navigation property groupPolicyUploadedDefinitionFiles in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyUploadedDefinitionFile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GroupPolicyUploadedDefinitionFile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GroupPolicyUploadedDefinitionFile | undefined>;
    /**
     * Delete navigation property groupPolicyUploadedDefinitionFiles for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The available group policy uploaded definition files for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupPolicyUploadedDefinitionFileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property groupPolicyUploadedDefinitionFiles in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GroupPolicyUploadedDefinitionFile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The available group policy uploaded definition files for this account.
 */
export interface GroupPolicyUploadedDefinitionFileItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const GroupPolicyUploadedDefinitionFileItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/groupPolicyUploadedDefinitionFiles/{groupPolicyUploadedDefinitionFile%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GroupPolicyUploadedDefinitionFileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GroupPolicyUploadedDefinitionFileItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupPolicyUploadedDefinitionFileItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    addLanguageFiles: {
        requestsMetadata: AddLanguageFilesRequestBuilderRequestsMetadata,
    },
    definitions: {
        requestsMetadata: DefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: DefinitionsRequestBuilderNavigationMetadata,
    },
    groupPolicyOperations: {
        requestsMetadata: GroupPolicyOperationsRequestBuilderRequestsMetadata,
        navigationMetadata: GroupPolicyOperationsRequestBuilderNavigationMetadata,
    },
    remove: {
        requestsMetadata: RemoveRequestBuilderRequestsMetadata,
    },
    removeLanguageFiles: {
        requestsMetadata: RemoveLanguageFilesRequestBuilderRequestsMetadata,
    },
    updateLanguageFiles: {
        requestsMetadata: UpdateLanguageFilesRequestBuilderRequestsMetadata,
    },
    uploadNewVersion: {
        requestsMetadata: UploadNewVersionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupPolicyUploadedDefinitionFileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GroupPolicyUploadedDefinitionFileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GroupPolicyUploadedDefinitionFileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyUploadedDefinitionFileFromDiscriminatorValue,
        queryParametersMapper: GroupPolicyUploadedDefinitionFileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GroupPolicyUploadedDefinitionFileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyUploadedDefinitionFileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGroupPolicyUploadedDefinitionFile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
