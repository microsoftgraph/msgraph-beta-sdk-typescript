/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementConfigurationCategoryCollectionResponseFromDiscriminatorValue, createDeviceManagementConfigurationCategoryFromDiscriminatorValue, serializeDeviceManagementConfigurationCategory, type DeviceManagementConfigurationCategory, type DeviceManagementConfigurationCategoryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeviceManagementConfigurationCategoryItemRequestBuilderRequestsMetadata, DeviceManagementConfigurationCategoryItemRequestBuilderUriTemplate, type DeviceManagementConfigurationCategoryItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the complianceCategories property of the microsoft.graph.deviceManagement entity.
 */
export interface ComplianceCategoriesRequestBuilder extends BaseRequestBuilder<ComplianceCategoriesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the complianceCategories property of the microsoft.graph.deviceManagement entity.
     * @param deviceManagementConfigurationCategoryId The unique identifier of deviceManagementConfigurationCategory
     * @returns a DeviceManagementConfigurationCategoryItemRequestBuilder
     */
     byDeviceManagementConfigurationCategoryId(deviceManagementConfigurationCategoryId: string) : DeviceManagementConfigurationCategoryItemRequestBuilder;
    /**
     * List of all compliance categories
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationCategoryCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ComplianceCategoriesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementConfigurationCategoryCollectionResponse | undefined>;
    /**
     * Create new navigation property to complianceCategories for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationCategory
     */
     post(body: DeviceManagementConfigurationCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementConfigurationCategory | undefined>;
    /**
     * List of all compliance categories
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ComplianceCategoriesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to complianceCategories for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: DeviceManagementConfigurationCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of all compliance categories
 */
export interface ComplianceCategoriesRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ComplianceCategoriesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ComplianceCategoriesRequestBuilderNavigationMetadata: Record<Exclude<keyof ComplianceCategoriesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementConfigurationCategoryId: {
        uriTemplate: DeviceManagementConfigurationCategoryItemRequestBuilderUriTemplate,
        requestsMetadata: DeviceManagementConfigurationCategoryItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["deviceManagementConfigurationCategory%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ComplianceCategoriesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementConfigurationCategoryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ComplianceCategoriesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementConfigurationCategoryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementConfigurationCategory,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ComplianceCategoriesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/complianceCategories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */