/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHardwareConfigurationAssignmentCollectionResponseFromDiscriminatorValue, createHardwareConfigurationAssignmentFromDiscriminatorValue, serializeHardwareConfigurationAssignment, type HardwareConfigurationAssignment, type HardwareConfigurationAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { HardwareConfigurationAssignmentItemRequestBuilderRequestsMetadata, type HardwareConfigurationAssignmentItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.hardwareConfiguration entity.
 */
export interface AssignmentsRequestBuilder extends BaseRequestBuilder<AssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.hardwareConfiguration entity.
     * @param hardwareConfigurationAssignmentId The unique identifier of hardwareConfigurationAssignment
     * @returns {HardwareConfigurationAssignmentItemRequestBuilder}
     */
     byHardwareConfigurationAssignmentId(hardwareConfigurationAssignmentId: string) : HardwareConfigurationAssignmentItemRequestBuilder;
    /**
     * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationAssignmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<HardwareConfigurationAssignmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HardwareConfigurationAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HardwareConfigurationAssignment | undefined>;
    /**
     * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HardwareConfigurationAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
 */
export interface AssignmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const AssignmentsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/hardwareConfigurations/{hardwareConfiguration%2Did}/assignments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHardwareConfigurationAssignmentId: {
        requestsMetadata: HardwareConfigurationAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["hardwareConfigurationAssignment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHardwareConfigurationAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */